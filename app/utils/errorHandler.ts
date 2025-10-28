export class ErrorHandler {
  static handle(error: Error): void {
    console.error('Error:', error.message);
  }

  static handleAsync(error: Error): Promise<void> {
    return Promise.resolve(this.handle(error));
  }
}