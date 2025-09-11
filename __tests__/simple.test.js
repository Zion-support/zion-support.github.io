import React from 'react';
describe('Basic Test', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
=======

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