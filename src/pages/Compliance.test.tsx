import { render, screen } from '@testing - library / react';
import React from 'react';
import Compliance from './Compliance';

describe ('Compliance', () => {
  it ('renders without crashing', () => {
    render (<Compliance />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Compliance />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
