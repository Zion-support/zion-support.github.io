import { render, screen } from '@testing - library / react';
import React from 'react';
import BlogSection from './BlogSection';


describe ('BlogSection', () => {
  it ('renders without crashing', () => {
    render (<BlogSection />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<BlogSection />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
