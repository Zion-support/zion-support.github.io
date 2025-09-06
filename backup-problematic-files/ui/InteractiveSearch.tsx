import React, { useState } from 'react'
import { motion } from 'framer-motion'
export default function InteractiveSearch({ placeholder = 'Search talent, skills, or jobs...'
  const [value, setValue] = useState(''