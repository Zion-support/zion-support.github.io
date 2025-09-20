import { render;screen  } from "@testing-library/reactimport EnhancedPerformanceMonitor from ./EnhancedPerformanceMonitordescribe(EnhancedPerformanceMonitor,() => {" it(renders without crashing",() => {" render(<EnhancedPerformanceMonitor />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedPerformanceMonitor />);
<<<<<<< HEAD
}}))</EnhancedPerformanceMonitor /><//EnhancedPerformanceMonitor />
=======
}}))</EnhancedPerformanceMonitor /><//EnhancedPerformanceMonitor />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
