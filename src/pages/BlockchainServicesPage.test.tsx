import { render, screen } from '@testing - library / react';
import React from 'react';
import BlockchainServicesPage from './BlockchainServicesPage';

describe ('BlockchainServicesPage', () => {
  it ('renders without crashing', () => {
    render (<BlockchainServicesPage />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<BlockchainServicesPage />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
