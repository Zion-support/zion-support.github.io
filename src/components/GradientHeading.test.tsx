import { render, screen } from '@testing - library / react';
import React from 'react';
import GradientHeading from './GradientHeading';


describe ('GradientHeading', () => {
  it ('renders without crashing', () => {
    render (<GradientHeading />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<GradientHeading />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
