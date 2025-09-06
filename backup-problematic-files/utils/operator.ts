type OperatorEvent = {
  type: string,
  sessionId: string,
  payload?: any
export async function logSupportEventToOperator(event: OperatorEvent): Promise<void> {
  //
  //