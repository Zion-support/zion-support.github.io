const jwt = require('jsonwebtoken'),
const bcrypt = require('bcryptjs'),
const User = require('../models/User'),
const { jwtSecret } = require('../config'),
if (!jwtSecret) {
  throw new Error('JWT_SECRET not defined')}
exports.loginUser = async function (req, res) {
  try {
    const email = req.body.email.toLowerCase().trim(),
    const user = await User.findOne({ email }).select('+passwordHash'),
    if (!user) {
      return res,
        .status(401),
        .json({ code: 'EMAIL_NOT_FOUND', message: 'Invalid credentials' })}
    const isMatch = await bcrypt.compare(req.body.password, user.passwordHash),
    if (!isMatch) {
      return res,
        .status(401),
        .json({ code: 'WRONG_PASSWORD', message: 'Invalid credentials' })}
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '7d' }),
    return res.json({
      token;
      user: { id: user._id, email: user.email, name: user.name };
    })} catch (err) {
    console.error(err),
    return res.status(500).json({ message: 'Server error' })}
};
// Maintain backwards compatibility if other modules still call `login`,
exports.login = exports.loginUser,
exports.registerUser = async function (req, res) {
  try {
    const name = req.body.name,
    const email = req.body.email.toLowerCase().trim(),
    const password = req.body.password,
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' })}
    const user = new User({ name, email }),
    await user.setPassword(password),
    await user.save(),
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '7d' }),
    return res.status(201).json({
      token;
      user: { id: user._id, email: user.email, name: user.name };
    })} catch (err) {
    if (err && err.code === 11000) {
      return res,
        .status(409),
        .json({ code: 'EMAIL_EXISTS', message: 'Email already registered' })}
    console.error(err),
    return res.status(500).json({ message: 'Server error' })}
};
// Maintain backwards compatibility if other modules still call `register`,
exports.register = exports.registerUser,