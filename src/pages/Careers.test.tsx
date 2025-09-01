import { render, screen } from '@testing - library / react';
import React from 'react';
import Careers from './Careers';

describe ('Careers', () => {
  it ('renders without crashing', () => {
    render (<Careers />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Careers />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
