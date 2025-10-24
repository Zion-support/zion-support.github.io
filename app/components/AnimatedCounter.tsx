<<<<<<< HEAD:app/components/AnimatedCounter.tsx
import React, { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
interface AnimatedCounterProps {
  className?: string
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end
  duration = 2000
=======
import React, { useEffect, useState, useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
>>>>>>> origin/main:app-backup/components/AnimatedCounter.tsx
  suffix = ''
  prefix = '';
  className = ''