<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport EnhancedInteractiveFeatures from ./EnhancedInteractiveFeaturesdescribe(EnhancedInteractiveFeatures,() => {" it(renders without crashing",() => {" render(<EnhancedInteractiveFeatures />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedInteractiveFeatures />);
=======
import { render,screen  } from "@testing-library/reactimport EnhancedInteractiveFeatures from ./EnhancedInteractiveFeaturesdescribe(EnhancedInteractiveFeatures,() => {" it(renders without crashing",() => {" render(<EnhancedInteractiveFeatures />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<EnhancedInteractiveFeatures />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</EnhancedInteractiveFeatures /><//EnhancedInteractiveFeatures />