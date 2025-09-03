    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});