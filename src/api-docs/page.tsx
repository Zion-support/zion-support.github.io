'use client'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Key, Copy } from 'lucide-react'
import { Code } from 'lucide-react'
import { Check } from 'lucide-react'

const $1: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = $2;
export default Page;