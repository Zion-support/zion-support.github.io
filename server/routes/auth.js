const express = require('express');
const {
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController');

const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/forgot-password', forgotPassword);
router.put('/reset/:token', resetPassword);

module.exports = router;
