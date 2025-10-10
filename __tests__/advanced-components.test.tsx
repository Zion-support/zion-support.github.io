


// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {

  }


    render(
      <MemoryRouter>
        <ThrowError shouldThrow={false} />
      </MemoryRouter>
    )
          </MemoryRouter>
    expect(screen.getByText('Test content')).toBeInTheDocument()
          </MemoryRouter>
  })
          </MemoryRouter>
})
          </MemoryRouter>