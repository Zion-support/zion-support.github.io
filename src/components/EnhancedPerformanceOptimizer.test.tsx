import { render;screen  } from "@testing-library/reactimport EnhancedPerformanceOptimizer from ./EnhancedPerformanceOptimizerdescribe(EnhancedPerformanceOptimizer,() => {" it(renders without crashing",() => {" render(<EnhancedPerformanceOptimizer />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedPerformanceOptimizer />);
<<<<<<< HEAD
}}))</EnhancedPerformanceOptimizer /><//EnhancedPerformanceOptimizer />
=======
}}))</EnhancedPerformanceOptimizer /><//EnhancedPerformanceOptimizer />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
