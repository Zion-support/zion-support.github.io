<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import;
  @testing-library/jest-dom';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel;

// Mock react-markdown;
jest.mock(
  'react-markdown', () => (props: { children: React.ReactNode }) => (
  <div data-testid=mock-markdown'>{props.children}</div>
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import;
  '@testing-library/jest-dom';';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel';
// Mock react-markdown;
jest.mock(;
  'react-markdown', () => (props: { children: React.ReactNode }) => (';
  <div data-testid='mock-markdown'>{props.children}</div>';
>>>>>>> main
));
// Define a type for Pie props for better type safety;
interface MockPieProps {;
  data: Array<{ name: string;
   value: number }>;
  children?: React.ReactNode;
=======
import React   from 'react''
import { render, screen }    from '@testing-library/react;'
import''
  '@testing-library/jest-dom
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel
// Mock react-markdown'
jest.mock(''
  'react-markdown', () => (props: { children: React.ReactNode }) => ('
  <div data-testid='mock-markdown'>{props.children}</div>'
))
// Define a type for Pie props for better type safety
interface MockPieProps {
  data: Array<{ name: string
   value: number }>
  children?: React.ReactNode
>>>>>>> main
  // Add other props if used by the actual Pie component and needed for the mock}
// Mock recharts
jest.mock(
<<<<<<< HEAD
  'recharts, () => {
=======
  'recharts', () => {'
>>>>>>> main
  const MockResponsiveContainer = ({
    children}: {
    children: React.ReactNode}) => <div data-testid='mock-responsive-container'>{children}</div>'
  const MockPieChart = ({ children }: { children: React.ReactNode }) => (
<<<<<<< HEAD
    <div data-testid=mock-pie-chart'>{children}</div>
  )
  const MockPie = (props: MockPieProps) => (
    <div data-testid='mock-pie data-data={JSON.stringify(props.data)}>
      {props.children}
    </div>
  ) // Use MockPieProps
  const MockCell = () => <div data-testid='mock-cell' />
  const MockTooltip = () => <div data-testid=mock-tooltip' />
  const MockLegend = () => <div data-testid='mock-legend />
=======
    <div data-testid='mock-pie-chart'>{children}</div>'
  )
  const MockPie = (props: MockPieProps) => (
    <div data-testid='mock-pie' data-data={JSON.stringify(props.data)}>'
      {props.children}
    </div>
  ) // Use MockPieProps
  const MockCell = () => <div data-testid='mock-cell' />'
  const MockTooltip = () => <div data-testid='mock-tooltip' />'
  const MockLegend = () => <div data-testid='mock-legend' />'
>>>>>>> main
  return {
    ResponsiveContainer: MockResponsiveContainer
    PieChart: MockPieChart
    Pie: MockPie
    Cell: MockCell
    Tooltip: MockTooltip
    Legend: MockLegend}
});
const mockSections = [
<<<<<<< HEAD
  { id:,
  1', title: 'Introduction, content:,
  This is the intro. },
  { id: '2, title:,
  Tokenomics', content: Details about tokenomics. },
  {
    id:,
  3',
    title: 'Token Distribution,
    content:,
  How tokens are distributed.}];
const mockDistributionData = [
  { name: 'Team, value: 20 },
  { name: ;
  'Marketing, value: 30 }]
describe('WhitepaperPreviewPanel', () => {
  test(
  renders token name and supply if provided', () => {
=======
  { id:
  1', title: 'Introduction, content:,'
  This is the intro.' },'
  { id: '2, title:,'
  Tokenomics', content: 'Details about tokenomics. },'
  {
    id:
  3
    title: 'Token Distribution,'
    content:
  How tokens are distributed.'}];'
const mockDistributionData = [
  { name: 'Team, value: 20 },'
  { name:
  'Marketing', value: 30 }]'
  describe(
  'WhitepaperPreviewPanel', () => {'
  test(
  'renders token name and supply if provided', () => {'
>>>>>>> main
    render(
      <WhitepaperPreviewPanel
        sections={[]}
        distributionChartData={[]}
<<<<<<< HEAD
        tokenName='MyToken;
        tokenSupply='1000000'/>);
=======
        tokenName='MyToken
        tokenSupply='1000000'/>);'
>>>>>>> main
    expect(screen.getByText(/MyToken - Whitepaper Draft/i)).toBeInTheDocument()
    expect(screen.getByText(/Total Supply: 1000000/i)).toBeInTheDocument()});
  test(
<<<<<<< HEAD
  renders all sections with titles and content using react-markdown', () => {
=======
  'renders all sections with titles and content using react-markdown', () => {'
>>>>>>> main
    render(
      <WhitepaperPreviewPanel
        sections={mockSections}
        distributionChartData={[]}
      />)
    mockSections.forEach(section => {
      // Check if title is rendered (prepended with ##)
      expect(screen.getByTestId(
<<<<<<< HEAD
  'mock-markdown)).toHaveTextContent(
        `## ${section.title}`);
      // Check if content is rendered;
      expect(screen.getByTestId(
  'mock-markdown')).toHaveTextContent(
        section.content)});
    // Ensure react-markdown was used multiple times (for title + content per section)
    expect(
      screen.getAllByTestId(
  mock-markdown').length).toBeGreaterThanOrEqual(mockSections.length * 2)});
  test(
  'renders no sections' message if sections array is empty', () => {
    render(<WhitepaperPreviewPanel sections={[]} distributionChartData={[]} />)
=======
  'mock-markdown')).toHaveTextContent('
        `## ${section.title}`)
      // Check if content is rendered
      expect(screen.getByTestId(
  'mock-markdown')).toHaveTextContent('
        section.content)})
    // Ensure react-markdown was used multiple times (for title + content per section)
    expect(
      screen.getAllByTestId(
  'mock-markdown').length).toBeGreaterThanOrEqual(mockSections.length * 2)})'
  test(
  'renders 'no sections' message if sections array is empty', () => {'
    render(<WhitepaperPreviewPanel sections={[]} distributionChartData={[]}  />)
>>>>>>> main
    expect(
      screen.getByText(/Whitepaper preview will appear here/i)).toBeInTheDocument()});
  test(
<<<<<<< HEAD
  renders distribution chart in 'Token Distribution' section if data is provided, () => {
=======
  'renders distribution chart in 'Token Distribution' section if data is provided', () => {'
>>>>>>> main
    render(
      <WhitepaperPreviewPanel
        sections={mockSections} // includes 'Token Distribution
        distributionChartData={mockDistributionData}
<<<<<<< HEAD
      />);
    // Check for chart components within the Token Distribution' section;
    const distributionSection = mockSections.find(s =>
      s.title.toLowerCase().includes(
  'token distribution));
    expect(distributionSection).toBeDefined();
    // Verify chart components are rendered;
=======
      />)
    // Check for chart components within the 'Token Distribution' section;'
    const distributionSection = mockSections.find(s =>
      s.title.toLowerCase().includes(
  'token distribution'));'
    expect(distributionSection).toBeDefined()
    // Verify chart components are rendered
>>>>>>> main
    expect(screen.getByTestId(
  'mock-responsive-container')).toBeInTheDocument();'
    expect(screen.getByTestId(
<<<<<<< HEAD
  mock-pie-chart')).toBeInTheDocument();
    const pieElement = screen.getByTestId(
  'mock-pie);
    expect(pieElement).toBeInTheDocument();
    expect(JSON.parse(pieElement.getAttribute(
  'data-data') ||;
  {}')).toEqual(
      mockDistributionData);
    expect(screen.getAllByTestId(
  'mock-cell).length).toBe(
      mockDistributionData.length);
=======
  'mock-pie-chart')).toBeInTheDocument();'
    const pieElement = screen.getByTestId(
  'mock-pie');'
    expect(pieElement).toBeInTheDocument()
    expect(JSON.parse(pieElement.getAttribute(
  'data-data') ||;{}')).toEqual('
      mockDistributionData)
    expect(screen.getAllByTestId(
  'mock-cell').length).toBe('
      mockDistributionData.length)
>>>>>>> main
    expect(screen.getByTestId(
  'mock-tooltip')).toBeInTheDocument();'
    expect(screen.getByTestId(
<<<<<<< HEAD
  mock-legend')).toBeInTheDocument()
    expect(screen.getByText(
  'Distribution Chart)).toBeInTheDocument()});
=======
  'mock-legend')).toBeInTheDocument()'
    expect(screen.getByText(
  'Distribution Chart')).toBeInTheDocument()})'
>>>>>>> main
  test(
  'does not render distribution chart if data is empty', () => {'
    render(
      <WhitepaperPreviewPanel
        sections={mockSections}
        distributionChartData={[]} // Empty data/>)
    expect(
      screen.queryByTestId(
<<<<<<< HEAD
  mock-responsive-container')).not.toBeInTheDocument();
    expect(screen.queryByText(
  'Distribution Chart)).not.toBeInTheDocument()});
  test(
  'does not render distribution chart if 'Token Distribution section is missing', () => {
    const sectionsWithoutDistribution = mockSections.filter(
      s => !s.title.toLowerCase().includes(
  'token distribution))
=======
  'mock-responsive-container')).not.toBeInTheDocument();'
    expect(screen.queryByText(
  'Distribution Chart')).not.toBeInTheDocument()})'
  test(
  'does not render distribution chart if 'Token Distribution' section is missing', () => {'
    const sectionsWithoutDistribution = mockSections.filter(
      s => !s.title.toLowerCase().includes(
  'token distribution');'
>>>>>>> main
    render(
      <WhitepaperPreviewPanel
        sections={sectionsWithoutDistribution}
        distributionChartData={mockDistributionData}
      />)
    expect(
      screen.queryByTestId(
<<<<<<< HEAD
  'mock-responsive-container')).not.toBeInTheDocument()})});
=======
  'mock-responsive-container')).not.toBeInTheDocument()})})'
>>>>>>> main
