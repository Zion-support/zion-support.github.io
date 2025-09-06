import React from 'react';
import { render, screen } from '@testing - library / react';
import '@testing - library / jest - dom';
import Navigation from '../components / Navigation';
describe ('Navigation', () => {
  test ('renders without crashing', () => {
    render (<Navigation />);
    expect (screen.getByRole ('main')).toBeInTheDocument ();
  });
;
  test ('displays correct content', () => {
    expect (screen.getByText (/Zion Tech Group / i)).toBeInTheDocument ();
});