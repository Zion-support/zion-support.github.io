<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic';

describe('AnalyticsManagerdynamic', () => {
  test('renders without crashing', () => {
    render(<AnalyticsManagerdynamic />);
    expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
import _React from 'react';  import '@testing-library/jest-dom'; import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic'; describe('AnalyticsManagerdynamic',() => { test('renders without crashing',() => { render(<AnalyticsManagerdynamic />); expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<AnalyticsManagerdynamic />)}); test('handles user interactions',() => { render(<AnalyticsManagerdynamic />)}); test('applies correct styling',() => { render(<AnalyticsManagerdynamic />)})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
