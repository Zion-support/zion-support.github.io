<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport EnhancedTestimonials from ./EnhancedTestimonialsdescribe(EnhancedTestimonials,() => {" it(renders without crashing",() => {" render(<EnhancedTestimonials />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedTestimonials />);
=======
import { render,screen  } from "@testing-library/reactimport EnhancedTestimonials from ./EnhancedTestimonialsdescribe(EnhancedTestimonials,() => {" it(renders without crashing",() => {" render(<EnhancedTestimonials />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<EnhancedTestimonials />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</EnhancedTestimonials /><//EnhancedTestimonials />