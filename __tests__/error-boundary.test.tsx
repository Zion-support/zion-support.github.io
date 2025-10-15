import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {;
    throw new Error('Test error');
  }
  return <di</di>v>No error</div>;
};
''