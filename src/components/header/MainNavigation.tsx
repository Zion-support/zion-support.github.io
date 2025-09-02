import React, { useState } from 'react';"
import { Link } from 'react-router-dom';"
export function MainNavigation({ className = '' }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompOpen, setIsCompOpen] = useState(false);