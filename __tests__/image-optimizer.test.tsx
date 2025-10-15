<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageOptimizer from '../app/components/ImageOptimizer';

=======
import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageOptimizer from '../app/components/ImageOptimizer'
>>>>>>> cursor/fix-errors-and-merge-to-main-74b7
// Mock the image loading
const mockImage = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  src: '',
  onload: null,
  onerror: null
