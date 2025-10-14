import React from 'react'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
jest.mock('../app/components/AdvancedPerformanceMonitor');
jest.mock('../app/components/AdvancedSEOOptimizer');
jest.mock('../app/components/EnhancedErrorBoundary');