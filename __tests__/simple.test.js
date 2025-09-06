import React from 'react';
<<<<<<< HEAD

import { render, screen } from '@testing - library / react';
import '@testing - library / jest - dom';
;
describe ('Simple Test', () => {
  test ('renders without crashing', () => {
    render (<div > Test Component</div>);
    expect (screen.getByText ('Test Component')).toBeInTheDocument ();
  });
;
  test ('basic math works', () => {
    expect (2 + 2).to_be (4);

  });
});
=======
import { render, screen } from '@testing-library/react';

describe('Basic Test', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
