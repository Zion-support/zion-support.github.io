<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../app/components/ErrorBoundary';

=======
import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from '../app/components/ErrorBoundary'
>>>>>>> cursor/fix-errors-and-merge-to-main-74b7
// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
