import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel';

// Mock react-markdown
jest.mock(
  'react-markdown',
  () => (props: { children: React.ReactNode }) => (
    <div data-testid='mock-markdown'>{props.children}</div>
  )
);

// Define a type for Pie props for better type safety
interface MockPieProps {
  data: Array<{ name: string; value: number }>;
  children?: React.ReactNode;
  // Add other props if used by the actual Pie component and needed for the mock
}

// Mock recharts
jest.mock(
  'recharts',
  () => {
    const MockResponsiveContainer = ({
      children
    }: {
      children: React.ReactNode;
    }) => <div data-testid='mock-responsive-container'>{children}</div>;

    const MockPieChart = ({ children }: { children: React.ReactNode }) => (
      <div data-testid='mock-pie-chart'>{children}</div>
    );

    const MockPie = ({ data }: MockPieProps) => (
      <div data-testid='mock-pie'>
        {data.map((item, index) => (
          <div key={index} data-testid={`pie-item-${item.name}`}>
            {item.name}: {item.value}
          </div>
        ))}
      </div>
    );

    const MockCell = ({ fill }: { fill: string }) => (
      <div data-testid='mock-cell' style={{ backgroundColor: fill }} />
    );

    return {
      ResponsiveContainer: MockResponsiveContainer,
      PieChart: MockPieChart,
      Pie: MockPie,
      Cell: MockCell
    };
  }
);

describe('WhitepaperPreviewPanel', () => {
  const mockWhitepaperData = {
    title: 'Test Whitepaper',
    content: '# Test Content\n\nThis is a test whitepaper.',
    metrics: {
      totalPages: 10,
      wordCount: 5000,
      readingTime: 20
    },
    charts: [
      {
        type: 'pie',
        title: 'Market Distribution',
        data: [
          { name: 'Segment A', value: 40 },
          { name: 'Segment B', value: 35 },
          { name: 'Segment C', value: 25 }
        ]
      }
    ]
  };

  it('renders without crashing', () => {
    render(<WhitepaperPreviewPanel data={mockWhitepaperData} />);
    expect(screen.getByText('Test Whitepaper')).toBeInTheDocument();
  });

  it('displays whitepaper content', () => {
    render(<WhitepaperPreviewPanel data={mockWhitepaperData} />);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('shows metrics correctly', () => {
    render(<WhitepaperPreviewPanel data={mockWhitepaperData} />);
    expect(screen.getByText('10')).toBeInTheDocument(); // totalPages
    expect(screen.getByText('5000')).toBeInTheDocument(); // wordCount
    expect(screen.getByText('20')).toBeInTheDocument(); // readingTime
  });

  it('renders charts when provided', () => {
    render(<WhitepaperPreviewPanel data={mockWhitepaperData} />);
    expect(screen.getByTestId('mock-pie-chart')).toBeInTheDocument();
    expect(screen.getByText('Market Distribution')).toBeInTheDocument();
  });

  it('handles empty data gracefully', () => {
    const emptyData = {
      title: '',
      content: '',
      metrics: {
        totalPages: 0,
        wordCount: 0,
        readingTime: 0
      },
      charts: []
    };

    render(<WhitepaperPreviewPanel data={emptyData} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('renders multiple charts', () => {
    const dataWithMultipleCharts = {
      ...mockWhitepaperData,
      charts: [
        {
          type: 'pie',
          title: 'Chart 1',
          data: [{ name: 'A', value: 50 }, { name: 'B', value: 50 }]
        },
        {
          type: 'pie',
          title: 'Chart 2',
          data: [{ name: 'X', value: 30 }, { name: 'Y', value: 70 }]
        }
      ]
    };

    render(<WhitepaperPreviewPanel data={dataWithMultipleCharts} />);
    expect(screen.getByText('Chart 1')).toBeInTheDocument();
    expect(screen.getByText('Chart 2')).toBeInTheDocument();
  });
});