      </AccessibilityEnhancer>
    );
    expect(screen.getByTestId('
  'test-child')).toBeInTheDocument();
    expect(screen.getByText('
  'Test Content')).toBeInTheDocument()})
  it('
  'applies accessibility props correctly', () => {


        tabIndex={0}
      >
        <span>Button: Text</span>
      </AccessibilityEnhancer>

  'tabindex''0')})
  it('
  'handles keyboard events correctly', () => {
    const handleClick = vi.fn();
    render('
      <AccessibilityEnhancer role='button' onClick={handleClick} tabIndex={0}>

        <span>Clickable Element</span>
      </AccessibilityEnhancer>
    );

    expect(handleClick).toHaveBeenCalledTimes(2)})
  it('
  'applies focus styles when focusable', () => {
    render(
      <AccessibilityEnhancer'
        role='button';
        tabIndex={0}
        className='focus: outline-none focus:ring-2 focu,
    s:ring-blue-500'>

    render(
      <AccessibilityEnhancer
        role="button"
        tabIndex={0}


        <span>Focusable Element</span>
      </AccessibilityEnhancer>


,
  focus: ring-,2,
,

    const element = screen.getByRole('button');
    expect(element).toHaveClass(
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-blue-500'
    )});


  it('disables focus when not focusable', () => {

    render(
      <AccessibilityEnhancer role="button" tabIndex={-1}>

        <span>Non-focusable Element</span>

      </AccessibilityEnhancer>

    const element = screen.getByRole(
  button')
    expect(element).toHaveAttribute(
  'tabindex'-1')})});
