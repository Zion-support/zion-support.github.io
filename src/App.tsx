import React, { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/
import { Footer } from './components/
import Sidebar from './components/
import { PerformanceMonitor } from './components/
import ErrorBoundary from './components/
const Home = lazy() => import('./pages/
const About = lazy() => import('./pages/
const Services = lazy() => import('./pages/
const Pricing = lazy() => import('./pages/
const Contact = lazy() => import('./pages/