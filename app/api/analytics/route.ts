import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const event = await request.json();
    
    // Log the event (in production, you would send this to your analytics service)
    console.log('Analytics Event:', {
      ...event,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    });

    // Here you would typically send the event to your analytics service
    // For example: Google Analytics, Mixpanel, Amplitude, etc.
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process analytics event' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Analytics API is running',
    timestamp: new Date().toISOString()
  });
}