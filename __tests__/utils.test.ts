
    const date = new Date('2024-01-01');
    const formatted = date.toISOString().split('T')[0];


    expect(formatted).toBe('2024-01-01')});

    const validEmail = 'test@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(validEmail)).toBe(true)})});



