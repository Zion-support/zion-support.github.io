<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport SEOHead from ./SEOHeaddescribe(SEOHead",() => { it("renders without crashing",() => { render(<SEOHead />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<SEOHead />);
=======
import { render,screen  } from "@testing-library/reactimport SEOHead from ./SEOHeaddescribe(SEOHead",() => { it("renders without crashing",() => { render(<SEOHead />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<SEOHead />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</SEOHead /><//SEOHead />