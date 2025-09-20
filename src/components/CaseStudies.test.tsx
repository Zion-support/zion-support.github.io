<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport CaseStudies from ./CaseStudiesdescribe(CaseStudies,() => {it(renders without crashing,() => {", render(<CaseStudies />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<CaseStudies />);
=======
import { render,screen  } from "@testing-library/reactimport CaseStudies from ./CaseStudiesdescribe(CaseStudies,() => {it(renders without crashing,() => {", render(<CaseStudies />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<CaseStudies />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</CaseStudies /><//CaseStudies />