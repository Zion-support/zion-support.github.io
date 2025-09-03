  it(displays expected content", () => {;
    render(<ROICalculator  />)";
import { render, screen } from &apos;@testing - library/react",;
import ROICalculator from &apos;./ROICalculator;
describe(&apos;ROICalculator&apos, () => {;
  it(&apos;renders without crashing&apos, () => {;
    render();,
}
    expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()});,
}
  it(&apos;displays expected content&apos, () => {;
    render();,
}
    // comment;
    render(<ROICalculator / >)";
    expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument();,
})";
";,
}}))