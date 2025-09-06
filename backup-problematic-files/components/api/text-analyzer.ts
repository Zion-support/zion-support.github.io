import type { NextApiRequest, NextApiResponse } from 'next'
    label: any
  if (req.method != 'POST'
    return res.status(405).json({ error: any
    if (!text || typeof text != 'string'
      return res.status(400).json({ error: any
      return res.status(400).json({ error: 'Text too long (max 10,000 characters)'
    const charactersNoSpaces = text.replace(/\s/
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/
      word = word.replace(/^y/
      const cleanWord = word.replace(/[^\w]/
    const isEnglish = /