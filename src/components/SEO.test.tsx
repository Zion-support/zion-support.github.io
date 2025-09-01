import { render, screen } from '@testing - library / react';
import React from 'react';
import SEO from './SEO';

describe ('SEO', () => {
  it ('renders without crashing', () => {
    render (<SEO />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<SEO />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
