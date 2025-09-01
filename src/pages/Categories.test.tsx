import { render, screen } from '@testing - library / react';
import React from 'react';
import Categories from './Categories';


describe ('Categories', () => {
  it ('renders without crashing', () => {
    render (<Categories />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Categories />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
