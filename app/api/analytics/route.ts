import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Process analytics data here
    console.log('Analytics data received:', body);
    
    return NextResponse.json({ success: true, message: 'Analytics data processed' });
  } catch (error) {
    console.error('Error processing analytics:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process analytics data' },
      { status: 500 }
    );
  }
}