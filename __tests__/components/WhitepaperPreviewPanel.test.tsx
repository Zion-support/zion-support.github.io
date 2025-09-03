import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel';

// Mock react-markdown
jest.mock('react-markdown', () => (props: { children: React.ReactNode }) => (
  <div data-testid="mock-markdown">{props.children}</div>
));

// Define a type for Pie props for better type safety
interface MockPieProps {
  data: Array<{ name: string; value: number }>;
  children?: React.ReactNode;
  // Add other props if used by the actual Pie component and needed for the mock
}

// Mock recharts
jest.mock('recharts', () => {
  const MockResponsiveContainer = ({
    children
  }: {
    children: React.ReactNode;
  }) => <div data-testid="responsive-container">{children}</div>;

  const MockPieChart = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="pie-chart">{children}</div>
  );

  const MockPie = ({ data }: MockPieProps) => (
    <div data-testid="pie">
      {data.map((item, index) => (
        <div key={index} data-testid={`pie-item-${item.name}`}>
          {item.name}: {item.value}
        </div>
      ))}
    </div>
  );

  const MockCell = ({ fill }: { fill: string }) => (
    <div data-testid="cell" style={{ backgroundColor: fill }} />
  );

  return {
    ResponsiveContainer: MockResponsiveContainer,
    PieChart: MockPieChart,
    Pie: MockPie,
    Cell: MockCell
  };
});

describe('WhitepaperPreviewPanel', () => {
  const mockWhitepaper = {
    id: '1',
    title: 'Test Whitepaper',
    content: '# Test Content\n\nThis is a test whitepaper.',
    summary: 'Test summary',
    tags: ['blockchain', 'crypto'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    author: {
      id: '1',
      name: 'Test Author',
      email: 'test@example.com'
    }
  };

  it('renders whitepaper title', () => {
    render(<WhitepaperPreviewPanel whitepaper={mockWhitepaper} />);
    expect(screen.getByText('Test Whitepaper')).toBeInTheDocument();
  });

  it('renders whitepaper summary', () => {
    render(<WhitepaperPreviewPanel whitepaper={mockWhitepaper} />);
    expect(screen.getByText('Test summary')).toBeInTheDocument();
  });

  it('renders whitepaper tags', () => {
    render(<WhitepaperPreviewPanel whitepaper={mockWhitepaper} />);
    expect(screen.getByText('blockchain')).toBeInTheDocument();
    expect(screen.getByText('crypto')).toBeInTheDocument();
  });

  it('renders author information', () => {
    render(<WhitepaperPreviewPanel whitepaper={mockWhitepaper} />);
    expect(screen.getByText('Test Author')).toBeInTheDocument();
  });

  it('renders markdown content', () => {
    render(<WhitepaperPreviewPanel whitepaper={mockWhitepaper} />);
    expect(screen.getByTestId('mock-markdown')).toBeInTheDocument();
  });

  it('renders creation date', () => {
    render(<WhitepaperPreviewPanel whitepaper={mockWhitepaper} />);
    expect(screen.getByText('January 1, 2023')).toBeInTheDocument();
  });

  it('handles missing author gracefully', () => {
    const whitepaperWithoutAuthor = {
      ...mockWhitepaper,
      author: null
    };
    
    render(<WhitepaperPreviewPanel whitepaper={whitepaperWithoutAuthor} />);
    expect(screen.getByText('Test Whitepaper')).toBeInTheDocument();
  });

  it('handles empty tags array', () => {
    const whitepaperWithoutTags = {
      ...mockWhitepaper,
      tags: []
    };
    
    render(<WhitepaperPreviewPanel whitepaper={whitepaperWithoutTags} />);
    expect(screen.getByText('Test Whitepaper')).toBeInTheDocument();
  });
});