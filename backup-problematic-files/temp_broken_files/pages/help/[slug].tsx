import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import { readJson } from '../../utils/
import type { HelpArticle } from '../../utils/
  const articles = readJson<HelpArticle[]>('help/
  const articles = readJson<HelpArticle[]>('help/
    await fetch('/api/support/
      headers:{ 'Content-Type': any