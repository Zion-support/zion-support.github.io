import { render, screen } from '@testing - library / react';
import React from 'react';
import BlogPost from './BlogPost';


describe ('BlogPost', () => {
  it ('renders without crashing', () => {
    render (<BlogPost />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<BlogPost />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
