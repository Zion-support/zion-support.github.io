import React from 'react';
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';

describe('ServiceTypeStep', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
=======

interface ServiceTypeStep.testProps {
  className?: string;
}

const ServiceTypeStep.test: React.FC<ServiceTypeStep.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceTypeStep.test</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
