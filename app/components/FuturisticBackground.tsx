'use client'
import React, { useEffect, useRef } from 'react'
const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
