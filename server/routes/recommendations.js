const express = require('express'),
const cache = require('../utils/cache'),
const router = express.Router(),
router.get('/', cache, (_req, res) =>,
  res.json([
    { itemId: 'eq-0o01', score: 0.92 },
    { itemId: 'eq-0o02', score: 0.85 },
  ])),
module.exports = router,