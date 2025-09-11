export default {};

export interface APIRequestBody {
  required: boolean;
  content: Record<string, APIContent>;
  description?: string;
}
