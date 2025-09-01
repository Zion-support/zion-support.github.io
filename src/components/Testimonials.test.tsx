import { render, screen } from '@testing - library / react';
import React from 'react';
import Testimonials from './Testimonials';

describe ('Testimonials', () => {
  it ('renders without crashing', () => {
    render (<Testimonials />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Testimonials />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
