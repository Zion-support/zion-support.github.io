import { render,screen } from "@testing-library/react"; render(<AICodeGenerator />); expect(screen.getByRole("main")).toBeInTheDocument()}
}); it("displays correct content",() => {; render(<AICodeGenerator />); it("handles user interactions",() => {; render(<AICodeGenerator />)})"
</AICodeGenerator>"