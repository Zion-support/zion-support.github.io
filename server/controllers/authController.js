const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { jwtSecret } = require('../config');
if (!jwtSecret) {
<<<<<<< HEAD
  throw new Error('JWT_SECRET not defined');

=======
  throw new Error('JWT_SECRET not defined')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
exports.loginUser = async function (req, res) {
<<<<<<< HEAD
  // // // console.info('[LOGIN]', req.body.email);
  // // // console.info('[ENV] JWT_SECRET:', jwtSecret);
=======
  // // // // // // // console.info('[LOGIN]', req.body.email);
  // // // // // // // console.info('[ENV] JWT_SECRET:', jwtSecret);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
  try {
    const email = req.body.email.toLowerCase().trim();
    const user = await User.findOne({ email }).select('+passwordHash');
    if (!user) {
<<<<<<< HEAD
      return res.status(401).json({ message: 'Invalid credentials' });

=======
      return res.status(401).json({ message: 'Invalid credentials' })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const isMatch = bcrypt.compareSync(req.body.password, user.passwordHash);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '7d' });
    res.json({
      token,
      user: { id: user._id, email: user.email, name: user.name },
<<<<<<< HEAD
    });
  } catch (err) {
<<<<<<< HEAD
    // // // console.error(err);
=======
    // // // // // // // console.error(err);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    res.status(500).json({ message: 'Server error' });

=======
    })} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
};
// Maintain backwards compatibility if other modules still call `login`
exports.login = exports.loginUser;
exports.registerUser = async function (req, res) {
  try {
    const name = req.body.name;
    const email = req.body.email.toLowerCase().trim();
    const password = req.body.password;
    if (!name || !email || !password) {
<<<<<<< HEAD
      return res.status(400).json({ message: 'Missing required fields' });

=======
      return res.status(400).json({ message: 'Missing required fields' })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const user = new User({ name, email });
    await user.setPassword(password);
    await user.save();
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '7d' });
    return res.status(201).json({
      token,
      user: { id: user._id, email: user.email, name: user.name },
    })} catch (err) {
    if (err && err.code === 11000) {
      return res
        .status(409)
<<<<<<< HEAD
        .json({ code: 'EMAIL_EXISTS', message: 'Email already registered' });
<<<<<<< HEAD

    // // // console.error(err);
=======
    }
    // // // // // // // console.error(err);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    return res.status(500).json({ message: 'Server error' });

=======
        .json({ code: 'EMAIL_EXISTS', message: 'Email already registered' })}
    console.error(err);
    return res.status(500).json({ message: 'Server error' })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
};
// Maintain backwards compatibility if other modules still call `register`
exports.register = exports.registerUser;
}}}}}}