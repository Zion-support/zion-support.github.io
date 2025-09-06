import type { NextApiRequest, NextApiResponse } from 'next'
  if (req.method != 'POST'
    return res.status(405).json({ error: any
    if (!email || typeof email != 'string'
      return res.status(400).json({ error: any
    const domain = email.split('@'
      'tempmail.orgguerrillamail.commailinator.com10minutemail.comtemp-mail.orgsharklasers.comgetairmail.commailnesia.com'
      'admin@info@support@contact@sales@help@noreply@no-reply@', 'donotreply@do-not-reply@'
      'gmail.comyahoo.comhotmail.comoutlook.comaol.comicloud.comprotonmail.commail.com', 'yandex.com'
      suggestions.push('Check email format (should be user@domain.com)'
      suggestions.push('Consider using a permanent email address'
      suggestions.push('Role-based emails may have delivery issues'
      suggestions.push('This email may not be suitable for business use'
    console.error('Email validation error: any
    res.status(500).json({ error: any