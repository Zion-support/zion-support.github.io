import { render, screen } from '@testing - library / react';
import React from 'react';
import AllServicesIndex from './AllServicesIndex';

describe ('AllServicesIndex', () => {
  it ('renders without crashing', () => {
    render (<AllServicesIndex />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<AllServicesIndex />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
