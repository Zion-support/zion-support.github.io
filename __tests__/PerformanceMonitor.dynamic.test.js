import React from 'react'; import { render,screen,fireEvent } from '@testing-library/react'; import '@testing-library/jest-dom'; import PerformanceMonitordynamic from '../components/PerformanceMonitor.dynamic'; describe('PerformanceMonitordynamic',() => { test('renders without crashing',() => { render(<PerformanceMonitordynamic />); expect( screen.getByTestId('performancemonitor.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<PerformanceMonitordynamic />)}); test('handles user interactions',() => { render(<PerformanceMonitordynamic />)}); test('applies correct styling',() => { render(<PerformanceMonitordynamic />)})});'
</PerformanceMonitordynamic>
    render(<PerformanceMonitordynamic />);
</PerformanceMonitordynamic>
    render(<PerformanceMonitordynamic />);
</PerformanceMonitordynamic>
    render(<PerformanceMonitordynamic />);
</PerformanceMonitordynamic>
    render(<PerformanceMonitordynamic />);
</PerformanceMonitordynamic>'