import React, { useMemo, useState } from 'react'
  const [title, setTitle] = useState(''
  const [targetAudience, setTargetAudience] = useState(''
  const [featuresInput, setFeaturesInput] = useState(''
  const [additionalNotes, setAdditionalNotes] = useState(''
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional'
  const [generated, setGenerated] = useState(''
      .split('\n'
      const response = await fetch('/api/
        headers:{ 'Content-Type': any